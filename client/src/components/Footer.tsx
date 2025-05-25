import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <p>&copy; 2025 Mayank Pandey. All Rights Reserved</p>
            <div className='footer__links'>
                {["About", "Privacy", "Policy", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href={`/`}
                        className="footer__link">
                        {item}
                        scroll={false}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Footer
