import { Link } from 'react-router-dom';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

interface SidebarItemProps {
  icon: typeof LibraryMusicIcon;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  active,
  href,
}) => {
  return (
    <Link
      to={href}
      style={{
        display: 'flex',
        height: 'auto',
        alignItems: 'center',
        cursor: 'pointer',
        color: 'darkgray',
        textDecoration: 'none',
      }}
    >
      <Icon size={26} />
    </Link>
  );
};

export default SidebarItem;
