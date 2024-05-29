export const Container = ({ className = "", children }) => {
  return <div className={`mycontainer ${className}`}>{children}</div>;
};
