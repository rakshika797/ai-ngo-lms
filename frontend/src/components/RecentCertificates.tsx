type Props = {
  certificates: any[];
};

export default function RecentCertificates({
  certificates,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-bold mb-4">
        Recent Certificates
      </h2>

      {certificates.length === 0 ? (
        <p className="text-gray-500">
          No certificates earned yet.
        </p>
      ) : (
        <div className="space-y-4">
          {certificates
            .slice(0, 3)
            .map((certificate) => (
              <div
                key={certificate.id}
                className="border-b pb-2"
              >
                <p className="font-medium">
                  {certificate.program.name}
                </p>

                <p className="text-sm text-gray-500">
                  {new Date(
                    certificate.issuedAt
                  ).toLocaleDateString()}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}