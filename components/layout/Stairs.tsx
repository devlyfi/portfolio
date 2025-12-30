'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname, useRouter } from 'next/navigation'
import { useRef, useEffect } from 'react'


const Stairs = (props: { children: React.ReactNode }) => {

    const currentPath = usePathname()
    const router = useRouter()

    const stairParentRef = useRef(null)
    const pageRef = useRef(null)

    useGSAP(function () {
        gsap.registerPlugin(ScrollTrigger)
        const tl = gsap.timeline()
        tl.to(stairParentRef.current, {
            display: 'block',
        })
        tl.from('.stair', {
            height: 0,
            stagger: {
                amount: -0.2
            }
        })
        tl.to('.stair', {
            y: '100%',
            stagger: {
                amount: -0.25
            }
        })
        tl.to(stairParentRef.current, {
            display: 'none'
        })
        tl.to('.stair', {
            y: '0%',
        })

        // Recalculate ScrollTrigger positions after transition completes
        tl.call(() => ScrollTrigger.refresh())

        // Dispatch a custom event so page-load animations can start after stairs
        tl.call(() => {
            if (typeof window !== 'undefined') {
                window.dispatchEvent(new Event('stairs:done'))
            }
        })

        // Avoid transforms on the page wrapper to keep pin/fixed behavior reliable
        gsap.from(pageRef.current, {
            opacity: 0,
            delay: 1.3
        })
    }, [currentPath])

    // Listen for pre-navigation trigger to start stairs immediately, then navigate
    useEffect(() => {
        const handler = (e: Event) => {
            const detail = (e as CustomEvent<{ href: string }>).detail
            const href = detail?.href
            if (!href) return

            const preTl = gsap.timeline()
            preTl.set(stairParentRef.current, { display: 'block' })
            preTl.set('.stair', { height: 0, y: '0%' })
            preTl.to('.stair', {
                height: '100%',
                duration: 0.4,
                ease: 'power2.inOut',
                stagger: { amount: 0.2, from: 'start' }
            })
            const isSameRoute = href === currentPath
            if (isSameRoute) {
                // If navigating to the same route, gracefully reverse and hide overlay
                preTl.to('.stair', {
                    height: 0,
                    duration: 0.4,
                    ease: 'power2.inOut',
                    stagger: { amount: 0.15, from: 'end' }
                })
                preTl.set(stairParentRef.current, { display: 'none' })
                preTl.call(() => {
                    ScrollTrigger.refresh()
                    if (typeof window !== 'undefined') {
                        window.dispatchEvent(new Event('stairs:done'))
                    }
                })
            } else {
                // Navigate when overlay has covered the screen
                preTl.call(() => router.push(href))
            }
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('stairs:navigate', handler as EventListener)
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('stairs:navigate', handler as EventListener)
            }
        }
    }, [router, currentPath])


    return (
        <div>
            <div ref={stairParentRef} className='h-screen w-full fixed z-1000 top-0 !overflow-hidden pointer-events-none'>
                <div className='h-full w-full flex'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Stairs