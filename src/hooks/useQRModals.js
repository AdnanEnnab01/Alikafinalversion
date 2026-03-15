import { useState } from 'react';
import { useEscapeKey } from './useEscapeKey';
import { useInactivityTimer } from './useInactivityTimer';

// QR Modal URLs mapping
const QR_MODAL_URLS = {
  amt: 'https://linktrees-s.netlify.app/page1',
  alika: 'https://linktrees-s.netlify.app/page13',
  gulfDorrah: 'https://linktrees-s.netlify.app/page6',
  gta: 'https://linktrees-s.netlify.app/page7',
  ahEnvironmental: 'https://linktrees-s.netlify.app/page9',
  centralMedicalcare: 'https://linktrees-s.netlify.app/page8',
  rk: 'https://linktrees-s.netlify.app/page10',
  antique: 'https://linktrees-s.netlify.app/page11',
  tlco: 'https://linktrees-s.netlify.app/page4',
  gulfConsult: 'https://linktrees-s.netlify.app/page12',
  gulfConsultArch: 'https://linktrees-s.netlify.app/page3',
  gsg: 'https://linktrees-s.netlify.app/page5',
  idc: 'https://linktrees-s.netlify.app/page2'
};

// QR Modal titles mapping
const QR_MODAL_TITLES = {
  amt: 'AMT QR Link',
  alika: 'Alika QR Link',
  gulfDorrah: 'Gulf Dorrah QR Link',
  gta: 'GTA QR Link',
  ahEnvironmental: 'AH Environmental QR Link',
  centralMedicalcare: 'Central Medicalcare QR Link',
  rk: 'RK QR Link',
  antique: 'Antique QR Link',
  tlco: 'TLCO QR Link',
  gulfConsult: 'Gulf Consult QR Link',
  gulfConsultArch: 'Gulf Consult Arch QR Link',
  gsg: 'GSG QR Link',
  idc: 'IDC QR Link'
};

export const useQRModals = () => {
  const [showAMTQRModal, setShowAMTQRModal] = useState(false);
  const [showAlikaQRModal, setShowAlikaQRModal] = useState(false);
  const [showGulfDorrahQRModal, setShowGulfDorrahQRModal] = useState(false);
  const [showGTAQRModal, setShowGTAQRModal] = useState(false);
  const [showAHEnvironmentalQRModal, setShowAHEnvironmentalQRModal] = useState(false);
  const [showCentralMedicalcareQRModal, setShowCentralMedicalcareQRModal] = useState(false);
  const [showRKQRModal, setShowRKQRModal] = useState(false);
  const [showAntiqueQRModal, setShowAntiqueQRModal] = useState(false);
  const [showTLCOQRModal, setShowTLCOQRModal] = useState(false);
  const [showGulfConsultQRModal, setShowGulfConsultQRModal] = useState(false);
  const [showGulfConsultArchQRModal, setShowGulfConsultArchQRModal] = useState(false);
  const [showGSGQRModal, setShowGSGQRModal] = useState(false);
  const [showIDCQRModal, setShowIDCQRModal] = useState(false);

  // Set up Escape key handlers
  useEscapeKey(showAMTQRModal, () => setShowAMTQRModal(false));
  useEscapeKey(showAlikaQRModal, () => setShowAlikaQRModal(false));
  useEscapeKey(showGulfDorrahQRModal, () => setShowGulfDorrahQRModal(false));
  useEscapeKey(showAHEnvironmentalQRModal, () => setShowAHEnvironmentalQRModal(false));
  useEscapeKey(showCentralMedicalcareQRModal, () => setShowCentralMedicalcareQRModal(false));
  useEscapeKey(showRKQRModal, () => setShowRKQRModal(false));
  useEscapeKey(showAntiqueQRModal, () => setShowAntiqueQRModal(false));
  useEscapeKey(showTLCOQRModal, () => setShowTLCOQRModal(false));
  useEscapeKey(showGSGQRModal, () => setShowGSGQRModal(false));
  useEscapeKey(showIDCQRModal, () => setShowIDCQRModal(false));
  useEscapeKey(showGTAQRModal, () => setShowGTAQRModal(false));
  useEscapeKey(showGulfConsultQRModal, () => setShowGulfConsultQRModal(false));
  useEscapeKey(showGulfConsultArchQRModal, () => setShowGulfConsultArchQRModal(false));

  // Set up inactivity timers
  useInactivityTimer(showAMTQRModal, () => setShowAMTQRModal(false));
  useInactivityTimer(showAlikaQRModal, () => setShowAlikaQRModal(false));
  useInactivityTimer(showGulfDorrahQRModal, () => setShowGulfDorrahQRModal(false));
  useInactivityTimer(showAHEnvironmentalQRModal, () => setShowAHEnvironmentalQRModal(false));
  useInactivityTimer(showCentralMedicalcareQRModal, () => setShowCentralMedicalcareQRModal(false));
  useInactivityTimer(showRKQRModal, () => setShowRKQRModal(false));
  useInactivityTimer(showAntiqueQRModal, () => setShowAntiqueQRModal(false));
  useInactivityTimer(showTLCOQRModal, () => setShowTLCOQRModal(false));
  useInactivityTimer(showGSGQRModal, () => setShowGSGQRModal(false));
  useInactivityTimer(showIDCQRModal, () => setShowIDCQRModal(false));
  useInactivityTimer(showGTAQRModal, () => setShowGTAQRModal(false));
  useInactivityTimer(showGulfConsultQRModal, () => setShowGulfConsultQRModal(false));
  useInactivityTimer(showGulfConsultArchQRModal, () => setShowGulfConsultArchQRModal(false));

  const qrModalStates = {
    amt: { isOpen: showAMTQRModal, onClose: () => setShowAMTQRModal(false), url: QR_MODAL_URLS.amt, title: QR_MODAL_TITLES.amt },
    alika: { isOpen: showAlikaQRModal, onClose: () => setShowAlikaQRModal(false), url: QR_MODAL_URLS.alika, title: QR_MODAL_TITLES.alika },
    gulfDorrah: { isOpen: showGulfDorrahQRModal, onClose: () => setShowGulfDorrahQRModal(false), url: QR_MODAL_URLS.gulfDorrah, title: QR_MODAL_TITLES.gulfDorrah },
    gta: { isOpen: showGTAQRModal, onClose: () => setShowGTAQRModal(false), url: QR_MODAL_URLS.gta, title: QR_MODAL_TITLES.gta },
    ahEnvironmental: { isOpen: showAHEnvironmentalQRModal, onClose: () => setShowAHEnvironmentalQRModal(false), url: QR_MODAL_URLS.ahEnvironmental, title: QR_MODAL_TITLES.ahEnvironmental },
    centralMedicalcare: { isOpen: showCentralMedicalcareQRModal, onClose: () => setShowCentralMedicalcareQRModal(false), url: QR_MODAL_URLS.centralMedicalcare, title: QR_MODAL_TITLES.centralMedicalcare },
    rk: { isOpen: showRKQRModal, onClose: () => setShowRKQRModal(false), url: QR_MODAL_URLS.rk, title: QR_MODAL_TITLES.rk },
    antique: { isOpen: showAntiqueQRModal, onClose: () => setShowAntiqueQRModal(false), url: QR_MODAL_URLS.antique, title: QR_MODAL_TITLES.antique },
    tlco: { isOpen: showTLCOQRModal, onClose: () => setShowTLCOQRModal(false), url: QR_MODAL_URLS.tlco, title: QR_MODAL_TITLES.tlco },
    gulfConsult: { isOpen: showGulfConsultQRModal, onClose: () => setShowGulfConsultQRModal(false), url: QR_MODAL_URLS.gulfConsult, title: QR_MODAL_TITLES.gulfConsult },
    gulfConsultArch: { isOpen: showGulfConsultArchQRModal, onClose: () => setShowGulfConsultArchQRModal(false), url: QR_MODAL_URLS.gulfConsultArch, title: QR_MODAL_TITLES.gulfConsultArch },
    gsg: { isOpen: showGSGQRModal, onClose: () => setShowGSGQRModal(false), url: QR_MODAL_URLS.gsg, title: QR_MODAL_TITLES.gsg },
    idc: { isOpen: showIDCQRModal, onClose: () => setShowIDCQRModal(false), url: QR_MODAL_URLS.idc, title: QR_MODAL_TITLES.idc }
  };

  return {
    setters: {
      setShowAMTQRModal,
      setShowAlikaQRModal,
      setShowGulfDorrahQRModal,
      setShowGTAQRModal,
      setShowAHEnvironmentalQRModal,
      setShowCentralMedicalcareQRModal,
      setShowRKQRModal,
      setShowAntiqueQRModal,
      setShowTLCOQRModal,
      setShowGulfConsultQRModal,
      setShowGulfConsultArchQRModal,
      setShowGSGQRModal,
      setShowIDCQRModal
    },
    qrModalStates
  };
};
