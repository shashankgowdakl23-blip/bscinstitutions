interface ComparisonFeature {
  feature: string;
  beginner: string;
  cash: string;
  mentorship: string;
}

const CoursesComparison = ({ features }: { features: ComparisonFeature[] }) => (
  <div className="bg-card rounded-xl border border-border p-6 shadow-lg">
    <h3 className="text-2xl font-bold text-center mb-8 text-primary">Course Comparison</h3>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-4 px-4 font-semibold text-primary">Features</th>
            <th className="text-center py-4 px-4 font-semibold text-primary">Beginner</th>
            <th className="text-center py-4 px-4 font-semibold text-primary">Cash Market</th>
            <th className="text-center py-4 px-4 font-semibold text-primary">Mentorship</th>
          </tr>
        </thead>
        <tbody>
          {features.map((row, index) => (
            <tr key={index} className="border-b border-border/50 hover:bg-primary/5 transition-colors">
              <td className="py-4 px-4 font-medium">{row.feature}</td>
              <td className="py-4 px-4 text-center">{row.beginner}</td>
              <td className="py-4 px-4 text-center">{row.cash}</td>
              <td className="py-4 px-4 text-center font-semibold text-primary">{row.mentorship}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default CoursesComparison; 