import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { useMemo } from 'react';

const getColor = () => {

  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);

  return { r, g, b };
}

const Root = () => {

  const colors = useMemo(() => {

    const newColors = [];

    for (let i = 0; i < 3; i++) {

      const newColor = getColor();
      newColors.push(newColor)
    }

    return newColors
  },[])

  return <>
    <ul>
      <p>Intensional: </p>
      <li>
        <Link to='/color/$r/$g/$b' params={{r: '255', g:'17', b:'120'}}>rgb(255, 17, 120)</Link>
      </li>
      <li>
        <Link to='/color/$r/$g/$b' params={{r: '1', g:'255', b:'244'}}>rgb(1, 255, 244)</Link>
      </li>
      <li>
        <Link to='/color/$r/$g/$b' params={{r: '124', g:'255', b:'1'}}>rgb(124, 255, 1)</Link>
      </li>
      <p>Random: </p>
      {colors.map((color, index) => (
      
      <li key={index}>
        <Link to='/color/$r/$g/$b' params={{r: color.r.toString(), g: color.g.toString(), b: color.b.toString()}}>rgb({color.r}, {color.g}, {color.b})</Link>
      </li>
      ))}
    </ul>
    <Outlet />
    </>
}

export const Route = createRootRoute({
  component: Root,
})
