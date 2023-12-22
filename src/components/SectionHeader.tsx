const SectionHeader = ({ sectionName }: { sectionName: string }) => {
  return (
    <div className="flex pb-10 w-full">
      <h2 className="text-3xl sm:text-5xl font-bold" aria-label={sectionName}>{`<${sectionName} />`}</h2>
    </div>
  );
};

export default SectionHeader;
