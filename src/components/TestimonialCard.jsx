export const TestimonialCard = () => {
  
  return (
    <div className="p-8 space-y-4 rounded-xl bg-slate-200 dark:bg-slate-800 dark:text-slate-300">
      <div>
        <img className="mx-auto rounded-full size-20" src="/img/me.jpg" alt="user" />
      </div>

      <p className="font-light">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus incidunt itaque impedit fugit repellat explicabo repellendus eius deleniti suscipit facere exercitationem minima."</p>

      <div className="space-y-2 text-center">
        <p className="font-semibold">John Doe</p>
        <span className="font-light">Supervisor - Intertab</span>
      </div>
    </div>
  )
}
