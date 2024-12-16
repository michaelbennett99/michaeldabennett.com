import { cn } from "@/lib/utils";

export default function Main(props: React.ComponentProps<"main">) {
  return <main className={cn("flex-1", props.className)} {...props} />;
}
