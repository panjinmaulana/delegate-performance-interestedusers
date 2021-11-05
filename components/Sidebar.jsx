import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

export default function Sidebar() {
  return (
    <SideNav
      onSelect={(selected) => {
        // Add your code here
      }}
      style={{
        background: "#FFFFFF",
        boxShadow:
          "-12px -12px 20px rgba(255, 255, 255, 0.2), 10px 10px 24px rgba(166, 180, 200, 0.15)",
        borderRadius: "40px",
      }}
    >
      <SideNav.Toggle
        style={{
          marginTop: "30px",
          marginLeft: "24px",
          backgroundColor: "#7DB7B4",
          borderRadius: "50%",
          width: "30px",
          height: "30px",
        }}
      />
      <div
        style={{
          marginTop: "25px",
          marginLeft: "80px",
          width: "73px",
          height: "73px",
          border: "3px solid #7DB7B4",
          borderRadius: "50%",
          textAlign: "center",
        }}
      >
        <h4 style={{ textAlign: "center", paddingTop: "20px" }}>KO</h4>
      </div>
      <div className="my-2" style={{ textAlign: "center" }}>
        <p
          style={{
            fontFamily: "Gotham",
            fontSize: "12px",
            fontWeight: "800",
          }}
        >
          KINKY OSTENDORF <br />{" "}
          <p
            style={{
              fontFamily: "Gotham",
              fontSize: "10px",
              fontWeight: "400",
            }}
          >
            kinkysfruitlab@outlook.com
          </p>
        </p>
      </div>
      <SideNav.Nav defaultSelected="performance" style={{ marginTop: "-10px" }}>
        <NavItem eventKey="overview">
          <NavIcon>
            <img src="./assets/overview.svg" alt="overview" />
          </NavIcon>
          <NavText style={{ color: "#666" }}>OVERVIEW</NavText>
        </NavItem>
        <NavItem eventKey="business">
          <NavIcon>
            <img src="./assets/business.svg" alt="business" />
          </NavIcon>
          <NavText style={{ color: "#666" }}>BUSINESS</NavText>
        </NavItem>
        <NavItem eventKey="inbox">
          <NavIcon>
            <img src="./assets/inbox.svg" alt="inbox" />
          </NavIcon>
          <NavText style={{ color: "#666" }}>INBOX</NavText>
        </NavItem>
        <NavItem eventKey="collaborators">
          <NavIcon>
            <img src="./assets/collaborators.svg" alt="collaborators" />
          </NavIcon>
          <NavText style={{ color: "#666" }}>COLLABORATORS</NavText>
        </NavItem>
        <NavItem eventKey="performance">
          <NavIcon>
            <img src="./assets/performance.svg" alt="performance" />
          </NavIcon>
          <NavText style={{ color: "#666" }}>PERFORMANCE</NavText>
          <NavItem eventKey="performance/summary">
            <NavText style={{ color: "#666" }}>SUMMARY</NavText>
          </NavItem>
          <NavItem eventKey="performance/credits">
            <NavText style={{ color: "#666" }}>CREDITS</NavText>
          </NavItem>
          <NavItem eventKey="performance/interestedUsers">
            <NavText style={{ color: "#7DB7B4" }}>INTERESTED USERS</NavText>
          </NavItem>
        </NavItem>
        <NavItem eventKey="billing">
          <NavIcon>
            <img src="./assets/billing.svg" alt="billing" />
          </NavIcon>
          <NavText style={{ color: "#666" }}>BILLING</NavText>
        </NavItem>
        <NavItem eventKey="support">
          <NavIcon>
            <img src="./assets/support.svg" alt="support" />
          </NavIcon>
          <NavText style={{ color: "#666" }}>SUPPORT</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}
