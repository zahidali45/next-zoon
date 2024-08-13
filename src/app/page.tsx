import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div><figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="/muhammad zahid.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
      “Hi,I'm muhammad zahid,a Class 11th student at ryk collage.I work as a freelancer,taking on various projects and tasks to gain new skills and experiences.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
      muhammad zahid
      </div>
      <div>
        Staff lahore
      </div>
    </figcaption>
  </div>
</figure></div>
    </main>
  );
}
