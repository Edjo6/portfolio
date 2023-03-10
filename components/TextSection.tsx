function TextSection({ text: paragraph }: { text: string }) {  
  return (
    <div className="text-center bg-gray-500 p-4 my-8">
      <p className="text-gray-900">
        {paragraph}
      </p>
    </div>
  );
}

export default TextSection;