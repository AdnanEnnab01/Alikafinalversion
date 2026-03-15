import React from 'react';
import AMTDetailView from '../companies/AMTDetailView';
import IDCDetailView from '../companies/IDCDetailView';
import AntiqueDetailView from '../companies/AntiqueDetailView';
import CentralMedicalcareDetailView from '../companies/CentralMedicalcareDetailView';
import GulfConsultDetailView from '../companies/GulfConsultDetailView';
import GulfDorrahDetailView from '../companies/GulfDorrahDetailView';
import GTADetailView from '../companies/GTADetailView';
import TLCODetailView from '../companies/TLCODetailView';
import GSGDetailView from '../companies/GSGDetailView';
import RKDetailView from '../companies/RKDetailView';
import AHEnvironmentalDetailView from '../companies/AHEnvironmentalDetailView';
import GulfLogoDetailView from '../companies/GulfLogoDetailView';

export default function CompanyDetailRouter({
  selectedCompany,
  companies,
  viewportSize,
  closeVideo,
  setters,
  qrModalSetters
}) {
  const companyId = selectedCompany?.id;

  if (companyId === 8) {
    return (
      <AMTDetailView
        selectedCompany={selectedCompany}
        companies={companies}
        setSelectedCompany={setters.setSelectedCompany}
        setShowAMTLearnMore={setters.setShowAMTLearnMore}
        setShowAMTQRModal={qrModalSetters.setShowAMTQRModal}
      />
    );
  }

  if (companyId === 1) {
    return (
      <IDCDetailView
        selectedCompany={selectedCompany}
        companies={companies}
        setSelectedCompany={setters.setSelectedCompany}
        setShowIDCLearnMore={setters.setShowIDCLearnMore}
        setShowIDCQRModal={qrModalSetters.setShowIDCQRModal}
      />
    );
  }

  if (companyId === 2) {
    return (
      <AntiqueDetailView
        selectedCompany={selectedCompany}
        companies={companies}
        setSelectedCompany={setters.setSelectedCompany}
        setShowAntiqueLearnMore={setters.setShowAntiqueLearnMore}
        setShowAntiqueQRModal={qrModalSetters.setShowAntiqueQRModal}
        viewportSize={viewportSize}
      />
    );
  }

  if (companyId === 3) {
    return (
      <CentralMedicalcareDetailView
        selectedCompany={selectedCompany}
        companies={companies}
        setSelectedCompany={setters.setSelectedCompany}
        setShowCentralMedicalcareLearnMore={setters.setShowCentralMedicalcareLearnMore}
        setShowCentralMedicalcareQRModal={qrModalSetters.setShowCentralMedicalcareQRModal}
      />
    );
  }

  if (companyId === 9) {
    return (
      <GulfConsultDetailView
        selectedCompany={selectedCompany}
        companies={companies}
        setSelectedCompany={setters.setSelectedCompany}
        setShowGulfConsultLearnMore={setters.setShowGulfConsultLearnMore}
        setShowGulfConsultArchQRModal={qrModalSetters.setShowGulfConsultArchQRModal}
      />
    );
  }

  if (companyId === 7) {
    return (
      <GulfDorrahDetailView
        selectedCompany={selectedCompany}
        companies={companies}
        setSelectedCompany={setters.setSelectedCompany}
        setShowGulfDorrahLearnMore={setters.setShowGulfDorrahLearnMore}
        setShowGulfDorrahQRModal={qrModalSetters.setShowGulfDorrahQRModal}
        viewportSize={viewportSize}
      />
    );
  }

  if (companyId === 4) {
    return (
      <GTADetailView
        selectedCompany={selectedCompany}
        companies={companies}
        setSelectedCompany={setters.setSelectedCompany}
        setShowGTALearnMore={setters.setShowGTALearnMore}
        setShowGTAQRModal={qrModalSetters.setShowGTAQRModal}
      />
    );
  }

  if (companyId === 10) {
    return (
      <TLCODetailView
        selectedCompany={selectedCompany}
        companies={companies}
        setSelectedCompany={setters.setSelectedCompany}
        setShowPartners={setters.setShowPartners}
        setShowTLCOQRModal={qrModalSetters.setShowTLCOQRModal}
        closeVideo={closeVideo}
      />
    );
  }

  if (companyId === 11) {
    return (
      <GSGDetailView
        selectedCompany={selectedCompany}
        companies={companies}
        setSelectedCompany={setters.setSelectedCompany}
        setShowGSGLearnMore={setters.setShowGSGLearnMore}
        setShowGSGQRModal={qrModalSetters.setShowGSGQRModal}
      />
    );
  }

  if (companyId === 6) {
    return (
      <RKDetailView
        selectedCompany={selectedCompany}
        companies={companies}
        setSelectedCompany={setters.setSelectedCompany}
        setShowRKLearnMore={setters.setShowRKLearnMore}
        setShowRKQRModal={qrModalSetters.setShowRKQRModal}
      />
    );
  }

  if (companyId === 5) {
    return (
      <AHEnvironmentalDetailView
        selectedCompany={selectedCompany}
        companies={companies}
        setSelectedCompany={setters.setSelectedCompany}
        setShowAHEnvironmentalLearnMore={setters.setShowAHEnvironmentalLearnMore}
        setShowAHEnvironmentalQRModal={qrModalSetters.setShowAHEnvironmentalQRModal}
      />
    );
  }

  if (companyId === 12) {
    return (
      <GulfLogoDetailView
        selectedCompany={selectedCompany}
        companies={companies}
        setSelectedCompany={setters.setSelectedCompany}
        setShowGulfConsult2LearnMore={setters.setShowGulfConsult2LearnMore}
        setShowGulfConsultQRModal={qrModalSetters.setShowGulfConsultQRModal}
        closeVideo={closeVideo}
      />
    );
  }

  return null;
}
