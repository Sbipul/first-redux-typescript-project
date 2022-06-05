import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";

const Header: FC = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  return (
    <div>
      <p>{count}</p>
    </div>
  );
};

export default Header;
