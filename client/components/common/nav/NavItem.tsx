import React from 'react';

type ItemType = {
  id?: number;
  subTitle?: string;
  subUrl?: string;
};

interface Props {
  title: string;
  url: string;
  items?: ItemType[];
}

const NavItem: React.FC<Props> = ({ title, url, items }) => {
  return (
    <li className="dropdown" style={{ marginRight: '5rem' }}>
      <a className="dropdown-item dropdown-toggle" href={url}>
        {title}
      </a>
      {items && (
        <ul className="dropdown-menu">
          {items.map((item) => (
            <li key={item.id}>
              <a
                className="dropdown-item"
                href={`https://thewhy.kr${item.subUrl}`}
              >
                {item.subTitle}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
