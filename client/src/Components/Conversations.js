import React, { useState } from "react";
import ConversationsItem from "./ConversationsItem";
import { useDispatch, useSelector } from "react-redux";

const Conversations = () => {
  const lightTheme = useSelector((state) => state.themeKey);

  const [conversations, setConversations] = useState([
    {
      name: "Test-1",
      lastMessage: "Last Messsage - 1",
      timeStamp: "today",
    },
    {
      name: "Test-2",
      lastMessage: "Last Messsage - 2",
      timeStamp: "today",
    },
    {
      name: "Test-3",
      lastMessage: "Last Messsage - 3",
      timeStamp: "today",
    },
  ]);
  return (
    <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
      {conversations.map((conversation) => {
        return (
          <ConversationsItem props={conversation} key={conversation.name} />
        );
      })}
    </div>
  );
};

export default Conversations;
