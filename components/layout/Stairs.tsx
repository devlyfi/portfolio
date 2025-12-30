'use client'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePathname, useRouter } from 'next/navigation'
import { useRef, useEffect, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Stairs = (props: { children: React.ReactNode }) => {
    const currentPath = usePathname()
    const router = useRouter()
    const [isFirstLoad, setIsFirstLoad] = useState(true)

    const stairParentRef = useRef<HTMLDivElement>(null)
    const stairsRef = useRef<HTMLDivElement[]>([])

    // Page entrance animation on route change
    useGSAP(() => {
        const ctx = gsap.context(() => {
            // Set initial state
            gsap.set(stairParentRef.current, { display: 'block' })

            const tl = gsap.timeline({
                defaults: {
                    ease: 'power4.inOut'
                },
                onComplete: () => {
                    // Critical: Refresh ScrollTrigger after animation completes
                    // Use a small delay to ensure DOM has updated
                    setTimeout(() => {
                        ScrollTrigger.refresh(true)
                        if (typeof window !== 'undefined') {
                            window.dispatchEvent(new Event('stairs:done'))
                        }
                    }, 100)
                }
            })

            // Stairs reveal animation (coming down)
            tl.fromTo(stairsRef.current,
                {
                    scaleY: 0,
                    transformOrigin: 'top'
                },
                {
                    scaleY: 1,
                    duration: 0.5,
                    stagger: {
                        each: 0.04,
                        from: 'start'
                    }
                }
            )

            // Stairs exit animation (sliding up)
            tl.to(stairsRef.current, {
                scaleY: 0,
                transformOrigin: 'bottom',
                duration: 0.5,
                stagger: {
                    each: 0.04,
                    from: 'end'
                }
            }, '+=0.05')

            // Hide overlay
            tl.set(stairParentRef.current, { display: 'none' })

            // Skip animation on first load for faster initial render
            if (isFirstLoad) {
                tl.progress(1)
                setIsFirstLoad(false)
            }
        })

        return () => ctx.revert()
    }, [currentPath])

    // Listen for pre-navigation trigger
    useEffect(() => {
        const handler = (e: Event) => {
            const detail = (e as CustomEvent<{ href: string }>).detail
            const href = detail?.href
            if (!href) return

            const isSameRoute = href === currentPath
            if (isSameRoute) return

            // Kill all ScrollTriggers before animation to prevent conflicts
            ScrollTrigger.getAll().forEach(st => st.kill())

            const preTl = gsap.timeline({
                defaults: {
                    ease: 'power4.inOut'
                }
            })

            // Show overlay and reset stairs
            preTl.set(stairParentRef.current, { display: 'block' })
            preTl.set(stairsRef.current, { scaleY: 0, transformOrigin: 'bottom' })

            // Stairs cover animation (coming up from bottom)
            preTl.to(stairsRef.current, {
                scaleY: 1,
                duration: 0.5,
                stagger: {
                    each: 0.04,
                    from: 'end'
                }
            })

            // Navigate after stairs cover the screen
            preTl.call(() => router.push(href))
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

    // Assign refs to stair elements
    const setStairRef = (el: HTMLDivElement | null, index: number) => {
        if (el) stairsRef.current[index] = el
    }

    return (
        <>
            {/* Stairs Overlay - completely separate from page content */}
            <div
                ref={stairParentRef}
                className="h-screen w-full fixed z-[9999] top-0 left-0 overflow-hidden pointer-events-none hidden"
            >
                <div className="h-full w-full flex">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            ref={(el) => setStairRef(el, i)}
                            className="stair h-full w-1/5 bg-foreground origin-top"
                            style={{
                                transform: 'scaleY(0)'
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Page Content - NO wrapper div, render children directly */}
            {/* This prevents any transform interference with ScrollTrigger */}
            {props.children}
        </>
    )
}

export default Stairs