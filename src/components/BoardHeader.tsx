import { Button } from "./ui/button";

const BoardHeader = () => {
  return (
    <div className="bg-blue-500 dark:bg-blue-800 text-white dark:text-gray-200 p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">TaskPulse Board</h1>
      <Button
        variant="outline"
        className="border-white dark:border-gray-400 text-white dark:text-gray-200 hover:bg-blue-600 dark:hover:bg-blue-900"
      >
        Settings
      </Button>
    </div>
  );
};

export default BoardHeader;
