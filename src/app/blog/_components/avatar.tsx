import {
  Avatar as AvatarPrimitive,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";

type Props = {
  name: string;
  picture: string;
  className?: string;
}

export default function Avatar({ name, picture, className }: Props) {
  const initials = name.split(" ").map((word) => word[0]).join("");

  return (
    <div className="flex items-center gap-2">
      <AvatarPrimitive>
        <AvatarImage src={picture} alt={name} />
        <AvatarFallback>{initials}</AvatarFallback>
      </AvatarPrimitive>
      <div className={className}>{name}</div>
    </div>
  );
}
