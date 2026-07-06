import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-transparent z-[60]">
      <div
        className="h-full bg-brass"
        style={{ width: `${progress}%`, transition: 'width 80ms linear' }}
      />
    </div>
  );
}
