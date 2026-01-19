export default function Error({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-center font-bold uppercase bg-red-600 text-white my-3 p-2">
      {children}
    </div>
  );
}
