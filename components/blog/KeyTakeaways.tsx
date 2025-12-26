import { CheckCircle2 } from "lucide-react";

interface KeyTakeawaysProps {
    takeaways: string[];
}

export function KeyTakeaways({ takeaways }: KeyTakeawaysProps) {
    return (
        <div className="bg-primary/5 border-l-4 border-primary p-8 md:p-10 my-10 space-y-6">
            <h3 className="text-2xl font-bold flex items-center gap-3 text-foreground">
                <CheckCircle2 className="size-8 text-primary" />
                Key Takeaways
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {takeaways.map((item, index) => (
                    <li key={index} className="flex gap-4 group">
                        <span className="flex-shrink-0 size-6 rounded-none bg-primary/10 flex items-center justify-center text-primary font-bold text-xs ring-1 ring-primary/20 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                            {index + 1}
                        </span>
                        <p className="text-muted-foreground font-medium leading-tight">
                            {item}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
