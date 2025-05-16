import { Button } from "./ui/button";

const BoardHeader = () => {
  return (
    <div className="bg-blue-600 text-white p-4 shadow-md flex justify-between items-center">
      <h1 className="text-2xl font-bold">TaskPulse Board</h1>
      <Button variant="outline" className="text-white border-white hover:bg-blue-700">
        Settings
      </Button>
    </div>
  );
};

export default BoardHeader;