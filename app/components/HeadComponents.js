import { useSession } from "next-auth/react";
import Overhead from "./Overhead";
import OverheadMenu from "./OverheadMenu";

const HeadComponents = () => {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 left-0 right-0 z-50">
      <Overhead />
      <OverheadMenu />
      <hr className="bg-white" style={{ height: '0.2px' }} />
    </div>
  );
};

export default HeadComponents;
