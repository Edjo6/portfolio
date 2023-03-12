function TextSection({ text: paragraph }: { text: string }) {  
  return (
    <div className="text-center bg-gray-300 w-4/5 p-10 m-8 rounded-2xl">
      <p className="text-gray-900">
        {paragraph}
      </p>
    </div>
  );
}

export default TextSection;