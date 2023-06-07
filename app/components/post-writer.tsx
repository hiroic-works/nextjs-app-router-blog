import { Author } from "@/app/types/posts";
import Image from "next/image";

export default function PostItem({ writer }: { writer: Author }) {
  return (
    <div className="max-w-2xl mx-auto flex justify-between border p-4 rounded">
      <div>
        <p className="text-lg font-medium text-gray-900 mb-3">
          作成者: {writer?.name}
        </p>
        <p className="leading-relaxed mb-3">{writer?.text}</p>
      </div>
      <Image
        src={writer?.image?.url}
        width={writer?.image?.width}
        height={writer?.image?.height}
        className="w-40 h-40 object-cover object-center"
        alt="Author"
      />
    </div>
  );
}
