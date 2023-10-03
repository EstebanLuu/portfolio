// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';
import Link from 'next/link';
import {useRouter} from 'next/router';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];


const Nav = () => {
  return <nav>
    <div>
      {
       navData.map((ele, ind)=> 
        <div key={ind}>
          <Link href={ele.path}>{ele.icon}</Link>
        </div>
        ) 
      }
    </div>
  </nav>;
};

export default Nav;
