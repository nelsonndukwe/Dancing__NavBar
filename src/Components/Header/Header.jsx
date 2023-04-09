import './css/Header.css'
import { gsap } from 'gsap/all';



import { useLayoutEffect, useRef, useState } from 'react';

const Header = () => {

    const [trigger, setTrigger] = useState(false)

   

    const amount = trigger ? 100 : 0
    const scarf = useRef()
    var tl = gsap.timeline();
    console.log(amount);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            scarf.current = gsap
                .timeline()
                .to(scarf.current, 0.4, {
                    "--scaff-1": amount,
                    ease: "Power1.easeOut"
                })
                .to(scarf.current, 0.4, {
                    "--scaff-2": amount,
                    ease: "Power1.easeOut"
                }, 0.05)
                .to(scarf.current, 0.4, {
                    "--scaff-3": amount,
                    ease: "Power1.easeOut"
                }, 0.15)
                .to(scarf.current, 0.4, {
                    "--scaff-4": amount,
                    ease: "Power1.easeOut"
                }, 0.2)
                .to(scarf.current, 0.4, {
                    "--scaff-5": amount,
                    ease: "Power1.easeOut"
                }, 0.25)
                .to(scarf.current, 0.4, {
                    "--scaff-6": amount,
                    ease: "Power1.easeOut"
                }, 0.3)
                .to(scarf.current, 0.4, {
                    "--scaff-7": amount,
                    ease: "Power1.easeOut"
                }, 0.35)
                .to(scarf.current, 0.4, {
                    "--scaff-8": amount,
                    ease: "Power1.easeOut"
                }, 0.4)
                .to(scarf.current, 0.4, {
                    "--scaff-9": amount,
                    ease: "Power1.easeOut"
                }, 0.45)
                .to(scarf.current, 0.4, {
                    "--scaff-10": amount,
                    ease: "Power1.easeOut"
                }, 0.5)

            return () => ctx.revert();
        },);
    }, [trigger]);


    return (
        <>
            <header className='wrap'>
                <div className={trigger ? "trigger_btn open" : "trigger_btn"} onClick={() => setTrigger(toogle => !toogle)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className='wrap_comp'>
                    <h1 className='h1'>
                        Hello
                    </h1>
                    <h1>World</h1>
                </div>
            </header >

            <div className={trigger ? "scafold " : "trigger_btn"} ref={scarf} style={{ hey: 20 }}>
                <ul>
                    <li onmouseenter="hover(1)" onmouseleave="leave(1)">Red Sea</li>
                    <li onmouseenter="hover(2)" onmouseleave="leave(2)">Lions Den</li>
                    <li onmouseenter="hover(3)" onmouseleave="leave(3)">Plagues</li>
                    <li onmouseenter="hover(4)" onmouseleave="leave(4)">Burning Bush</li>
                </ul>


            </div>


        </>
    )
}

export default Header