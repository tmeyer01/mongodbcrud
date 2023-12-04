import React from "react";
import RemoveBtn from "@/app/components/RemoveBtn";

function TopicsList() {
  return (
    <>
      <div>
        <div>
          <h2>Topic Title</h2>
          <div>Topic Description</div>
        </div>
        <div>
          <RemoveBtn />
        </div>
      </div>
    </>
  );
}

export default TopicsList;
