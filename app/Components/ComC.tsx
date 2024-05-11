import React from "react";
import {Card, CardHeader, CardBody, Divider} from "@nextui-org/react";

const ComC = ({item}:any)=> {
  return (
    <Card className="max-w-[400px] shadow-lg p-3 cursor-pointer border-[1px] bg-slate-100 rounded-2xl ">
      <CardHeader className="flex gap-3">
        <img src={item.avatar} width={50}  />
        <div className="flex flex-col">
          <p className="text-lg font-semibold ">{item.name}</p>
          <p className="text-small text-default-500 font-medium text-blue-900 "> {item.jop} </p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p className="text-slate-600 tracking-wide " > {item.review} </p>
      </CardBody>
    </Card>
  );
}
export default ComC