import {
  faDiscord, faFacebook, faGithub, faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WhiteLogo from '../../public/logos/logo-cat-horitzontal.svg';

function Footer() {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <div>
        <WhiteLogo className="w-20 h-20" />
        <p>
          speedcubing.cat
          <br />
          <a href="https://github.com/mameijeiras/speedcubing.cat">
            <FontAwesomeIcon icon={faGithub} />
            {' '}
            Developed by
            {' '}
            <span className="font-bold">Marcos Ameijeiras</span>
          </a>
        </p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a aria-label="Facebook link" href="https://www.facebook.com/speedcubingireland/"><FontAwesomeIcon icon={faFacebook} /></a>
          <a aria-label="Instagram link" href="https://www.instagram.com/speedcubingireland/"><FontAwesomeIcon icon={faInstagram} /></a>
          <a aria-label="Discord link" href="https://discord.gg/FCdnfetK7c"><FontAwesomeIcon icon={faDiscord} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
