import React from "react";
import styled from "styled-components";
import DemoBarChart from "./DemoBarChart";
import DemoPieChart from "./DemoPieChart";
import DemoBubbleChart from "./DemoBubbleChart";
import TextArea from "./TextArea";

const DashboardWrapper = styled.div`
  height: 100%;
  width: 100vw;
  background: #1a203a;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Section = styled.div`
  display: flex;
  padding: 30px;
  box-sizing: border-box;
  :nth-child(2) {
    margin-top: -30px;
  }
`;

const ItemWrapper = styled.div`
  width: ${p => p.width}
  min-width:  ${p => p.min};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #252c47;
  &:first-child {
    margin-right: 20px;
  }
`;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Section>
        <ItemWrapper width="70%" min="600px">
          <DemoBarChart />
        </ItemWrapper>
        <ItemWrapper width="30%" min="400px">
          <DemoPieChart />
        </ItemWrapper>
      </Section>
      <Section>
        <ItemWrapper width="70%" min="600px">
          <DemoBubbleChart />
        </ItemWrapper>
        <ItemWrapper width="30%" min="400px">
          <TextArea type="user1" />
          <TextArea type="user2" />
        </ItemWrapper>
      </Section>
    </DashboardWrapper>
  );
};

export default Dashboard;
