import  { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function ViteStackAnimation() {
  const containerRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const iconRef = useRef(null);
  const pill1Ref = useRef(null);
  const pill2Ref = useRef(null);
  const pill3Ref = useRef(null);

  useEffect(() => {
    // Initial positions
    gsap.set(layer1Ref.current, { 
      y: -200, 
      rotationX: -15,
      opacity: 0.3
    });
    gsap.set(layer2Ref.current, { 
      y: -100, 
      rotationX: -10,
      opacity: 0.5
    });
    gsap.set([pill1Ref.current, pill2Ref.current, pill3Ref.current], {
      scale: 0,
      opacity: 0
    });

    const mainTimeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    mainTimeline
      .to(layer1Ref.current, {
        duration: 1.2,
        y: -40,
        rotationX: -5,
        opacity: 0.6,
        ease: "power2.out"
      })
      .to(layer2Ref.current, {
        duration: 1.2,
        y: -20,
        rotationX: -3,
        opacity: 0.8,
        ease: "power2.out"
      }, "-=0.9")
      .to(pill1Ref.current, {
        duration: 0.5,
        scale: 1,
        opacity: 1,
        ease: "back.out(2)"
      }, "-=0.3")
      .to(pill2Ref.current, {
        duration: 0.5,
        scale: 1,
        opacity: 1,
        ease: "back.out(2)"
      }, "-=0.3")
      .to(pill3Ref.current, {
        duration: 0.5,
        scale: 1,
        opacity: 1,
        ease: "back.out(2)"
      }, "-=0.3")
      .to(containerRef.current, {
        duration: 1.5,
        rotationY: 15,
        ease: "power1.inOut"
      })
      .to(containerRef.current, {
        duration: 1.5,
        rotationY: -15,
        ease: "power1.inOut"
      })
      .to(containerRef.current, {
        duration: 1,
        rotationY: 0,
        ease: "power1.inOut"
      })
      .to([pill1Ref.current, pill2Ref.current, pill3Ref.current], {
        duration: 0.3,
        scale: 0,
        opacity: 0,
        ease: "back.in(2)"
      })
      .to(layer1Ref.current, {
        duration: 1,
        y: -200,
        rotationX: -15,
        opacity: 0.3,
        ease: "power2.in"
      })
      .to(layer2Ref.current, {
        duration: 1,
        y: -100,
        rotationX: -10,
        opacity: 0.5,
        ease: "power2.in"
      }, "-=0.8");

    gsap.to(iconRef.current, {
      duration: 3,
      rotation: 360,
      repeat: -1,
      ease: "none"
    });

  }, []);

  const layerStyle = {
    width: '350px',
    height: '350px',
    borderRadius: '32px',
    position: 'absolute',
    transformStyle: 'preserve-3d'
  };

  const pillStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '20px',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transformStyle: 'preserve-3d'
  };

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      background: '#000',
      overflow: 'hidden'
    }}>
      <div 
        ref={containerRef}
        style={{ 
          position: 'relative',
          perspective: '2000px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Layer 1 */}
        <div
          ref={layer1Ref}
          style={{
            ...layerStyle,
            background: 'rgba(17, 17, 27, 0.3)',
            border: '1px solid rgba(147, 51, 234, 0.2)',
            boxShadow: '0 0 30px rgba(147, 51, 234, 0.2)',
          }}
        >
          <div style={{ position: 'absolute', top: '16px', right: '16px', color: '#6b7280', fontSize: '12px', fontFamily: 'monospace' }}>
            .JSON
          </div>
        </div>

        {/* Layer 2 */}
        <div
          ref={layer2Ref}
          style={{
            ...layerStyle,
            background: 'rgba(17, 17, 27, 0.4)',
            border: '1px solid rgba(147, 51, 234, 0.3)',
            boxShadow: '0 0 30px rgba(147, 51, 234, 0.3)',
          }}
        >
          <div style={{ position: 'absolute', top: '16px', right: '16px', color: '#9ca3af', fontSize: '12px', fontFamily: 'monospace' }}>
            .TSX
          </div>
        </div>

        {/* Layer 3 */}
        <div
          ref={layer3Ref}
          style={{
            ...layerStyle,
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
            border: '2px solid rgba(147, 51, 234, 0.6)',
            boxShadow: '0 0 50px rgba(147, 51, 234, 0.5)',
          }}
        >
          <div style={{ position: 'absolute', top: '16px', right: '16px', color: '#d1d5db', fontSize: '12px', fontFamily: 'monospace' }}>
            .SCSS
          </div>

          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div ref={iconRef} style={{ fontSize: '96px' }}>
              ⚡
            </div>
          </div>
        </div>

        {/* Pills */}
        <div
          ref={pill1Ref}
          style={{
            ...pillStyle,
            top: '380px',
            left: '20px',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
            border: '2px solid rgba(147, 51, 234, 0.6)',
            boxShadow: '0 0 30px rgba(147, 51, 234, 0.4)',
            fontSize: '40px'
          }}
        >
          🎨
        </div>

        <div
          ref={pill2Ref}
          style={{
            ...pillStyle,
            top: '420px',
            left: '135px',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
            border: '2px solid rgba(147, 51, 234, 0.6)',
            boxShadow: '0 0 30px rgba(147, 51, 234, 0.4)',
            fontSize: '40px'
          }}
        >
          📜
        </div>

        <div
          ref={pill3Ref}
          style={{
            ...pillStyle,
            top: '380px',
            right: '20px',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16162a 100%)',
            border: '2px solid rgba(147, 51, 234, 0.6)',
            boxShadow: '0 0 30px rgba(147, 51, 234, 0.4)',
            fontSize: '40px'
          }}
        >
          📄
        </div>
      </div>
    </div>
  );
}