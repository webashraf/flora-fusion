import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  const skeletonArray = Array.from({ length: 8 });

  return (
    <div className="grid grid-cols-4 gap-10">
      {skeletonArray.map((_, i) => (
        <div key={i} className="flex flex-col space-y-3">
          <Skeleton
            key={i}
            className="h-[180px] w-[330px] rounded-xl bg-slate-300"
          />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[290px] bg-slate-300" />
            <Skeleton className="h-4 w-[230px] bg-slate-300" />
          </div>
        </div>
      ))}
    </div>
  );
}
