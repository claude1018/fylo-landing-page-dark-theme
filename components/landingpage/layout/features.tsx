import Image from 'next/image';
import styles from '../styles/features.module.scss';
import accessAnywhere from '../../../public/images/icon-access-anywhere.svg';
import security from '../../../public/images/icon-security.svg';
import colab from '../../../public/images/icon-collaboration.svg';
import anyFile from '../../../public/images/icon-any-file.svg';
import React from 'react';

type FComp = {
  src: string;
  alt: string;
  title: string;
};

const FeaturesLayout: React.FC = () => {
  return (
    <div className="grid-features md:w-[50rem]">
      <FeatureBox
        src={accessAnywhere}
        alt="mobile and pc"
        title="Access your files, anywhere"
      >
        The ability to use a smartphone, tablet, or computer to access your
        account means your files follow you everywhere.
      </FeatureBox>
      <FeatureBox src={security} alt="shield" title="Security you can trust">
        2-factor authentication and user-controlled encryption are just a couple
        of the security features we allow to help secure your files.
      </FeatureBox>
      <FeatureBox
        src={colab}
        alt="checked clock with people"
        title="Real-time collaboration"
      >
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </FeatureBox>
      <FeatureBox src={anyFile} alt="folder" title="Store any type of file">
        Whether you're sharing holidays photos or work documents, Fylo has you
        covered allowing for all file types to be securely stored and shared.
      </FeatureBox>
    </div>
  );
};

const FeatureBox: React.FC<FComp> = ({ src, title, alt, children }) => {
  return (
    <div className={styles.container}>
      <Image src={src} alt={alt} aria-hidden="true" />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{children}</p>
    </div>
  );
};

export default FeaturesLayout;
