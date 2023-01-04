import { m } from "framer-motion";
import React from "react";
const BackwardCounter = () => {
  const abc = () => {
    // 小明的銀行帳戶資訊
    let mingAccount = {
      name: "小明",
      age: 22,
      deposit: 10000,
      depositRecord: [
        {
          title: "開戶",
          amounts: 10000,
        },
      ],
    };
    // 小明的存款資訊
    let mingTransfer = [
      {
        title: "一月存款",
        amounts: 777,
      },
      {
        title: "二月存款",
        amounts: 7000,
      },
      {
        title: "三月存款",
        amounts: 70000,
      },
    ];
    mingTransfer.forEach((element) => {
      mingAccount.deposit += element.amounts;
    });
    mingAccount.depositRecord.push(...mingTransfer);
    console.log(mingAccount);
  };
  return <button onClick={abc}>abc</button>;
};
export default BackwardCounter;
