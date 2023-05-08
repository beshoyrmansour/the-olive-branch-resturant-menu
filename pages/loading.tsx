export default function Loading() {
  return <>
    <style jsx>{`
        .loader {
          border: 16px solid #f3f3f3; 
          border-top: 16px solid #3498db;
          border-radius: 50%;
          width: 121px;
          height: 121px;
          animation: spin 2s linear infinite;
          margin: auto;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
          0% { transform: rotate(0deg); }
        }
    `}</style>
    <div className="loader"></div>
  </>
}