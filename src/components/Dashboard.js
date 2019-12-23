import React from "react";
import styled from "styled-components";
import DemoBarChart from "./DemoBarChart";
import TextArea from "./TextArea";

const DashboardWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background: #1a203a;
`;
const Section = styled.div`
  display: flex;
  padding: 30px;
  box-sizing: border-box;
`;

const ItemWrapper = styled.div`
  width: 50%;
  margin-right: 20px;
  min-width: 600px;
  background: #252c47;
`;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Section>
        <ItemWrapper>
          <DemoBarChart />
        </ItemWrapper>
        <ItemWrapper>
          <DemoBarChart />
        </ItemWrapper>
      </Section>
      <Section>
        <ItemWrapper>
          <TextArea />
        </ItemWrapper>
      </Section>
    </DashboardWrapper>
  );
};

export default Dashboard;
