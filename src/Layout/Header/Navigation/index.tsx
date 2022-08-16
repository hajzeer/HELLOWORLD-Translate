import {Anchor, Container} from './style';
import React, {useRef} from 'react';
import Link from 'next/link';
import {gsap} from 'gsap'

interface IProps {
    readonly active?: boolean | unknown;
}

const Nav = React.memo<IProps>(({active}) => {
    let anchorFirst = useRef<HTMLAnchorElement>(null);
    let anchorSecond = useRef<HTMLAnchorElement>(null);
    let anchorThird = useRef<HTMLAnchorElement>(null);

    const tl = gsap.timeline({delay: .3})


    if (active) {
        tl.fromTo(anchorFirst.current, {x: -150, opacity: 0}, {x: 0, opacity: 1, duration: .3})
            .fromTo(anchorSecond.current, {x: -150, opacity: 0}, {x: 0, opacity: 1, duration: .3})
            .fromTo(anchorThird.current, {x: -150, opacity: 0}, {x: 0, opacity: 1, duration: .3})
    }

    return (
        <Container open={active}>
            <Link href="/" passHref>
                <Anchor ref={anchorFirst}>Home</Anchor>
            </Link>
            <Link href="/about" passHref>
                <Anchor ref={anchorSecond}>About</Anchor>
            </Link>
            <Link href="/contact" passHref>
                <Anchor ref={anchorThird}>Contact</Anchor>
            </Link>
        </Container>
    );
});

export default Nav;
