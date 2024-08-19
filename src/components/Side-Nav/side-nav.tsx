import { Offcanvas } from "react-bootstrap";

interface SideNavProps {
  show: boolean;
  onHide: () => void;
}

const SideNav: React.FC<SideNavProps> = ({ show, onHide }) => (
  <Offcanvas show={show} onHide={onHide} backdrop="static">
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Trebta Admin Panel</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
      I will not close if you click outside of me.
    </Offcanvas.Body>
  </Offcanvas>
);

export default SideNav;
