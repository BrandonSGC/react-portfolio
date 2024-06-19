export const TagsList = ({tags}) => {
  return (
    <ul className="flex flex-wrap gap-2 text-sm">
      {tags?.map((tag, i) => (
        <li
          className="inline-block px-2 py-1 rounded-xl bg-slate-300 text-slate-800 dark:text-slate-100 dark:bg-slate-600"
          key={i}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
};
