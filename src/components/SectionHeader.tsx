const SectionHeader = ({ sectionName }: { sectionName: string }) => {
  return (
    <div className="flex pb-4 md:pb-8 lg:pb-10 w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold" aria-label={sectionName}>{`<${sectionName} />`}</h2>
    </div>
  );
};

export default SectionHeader;
