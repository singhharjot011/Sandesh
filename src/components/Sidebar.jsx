function Sidebar() {
  return (
    <div className="flex items-start gap-2.5">
      <div className="flex items-center p-2 border-b">
        <img
          className="w-8 h-8 rounded-full"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="Jese image"
        />
        <span className="text-sm font-semibold text-gray-900 dark:text-white">
          Bonnie Green
        </span>
      </div>
      
    </div>
  );
}

export default Sidebar;
