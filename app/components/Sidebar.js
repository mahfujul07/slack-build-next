import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOption from "./SidebarOption";
import {
  AppsOutlined,
  ArrowDownwardOutlined,
  BookmarksOutlined,
  DraftsOutlined,
  ExpandMoreOutlined,
  FileCopyOutlined,
  InboxOutlined,
  InsertCommentOutlined,
  PeopleAltOutlined,
} from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../utils/firebase";

function Sidebar() {
  // const [channels, loading, error] = useCollection(db.useCollection("rooms"));

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>MAHFUZ HQ</h2>
          <h3>
            <FiberManualRecordIcon />
            Mahfuz
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>

      <SidebarOption Icon={InsertCommentOutlined} title="Threads" />
      <SidebarOption Icon={InboxOutlined} title="Mentions & Reactions" />
      <SidebarOption Icon={DraftsOutlined} title="Saved items" />
      <SidebarOption Icon={BookmarksOutlined} title="Channel browser" />
      <SidebarOption Icon={PeopleAltOutlined} title="People & user groups" />
      <SidebarOption Icon={AppsOutlined} title="Apps" />
      <SidebarOption Icon={FileCopyOutlined} title="File browser" />
      <SidebarOption Icon={ArrowDownwardOutlined} title="Show Less" />
      <hr />
      <SidebarOption Icon={ExpandMoreOutlined} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel" />

      {channels?.docs.map((doc) => (
        <SidebarOption
          addChannelOption
          key={doc.id}
          id={doc.id}
          title={doc.data().name}
        />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  flex: 0.3;
  color: white;
  background-color: var(--slack-color);
  max-width: 260px;
  margin-top: 60px;

  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;

  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }

  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }

  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
