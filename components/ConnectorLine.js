export default function ConnectorLine({ from, to }) {
  const getLineClass = () => {
    switch (from) {
      case 'top-center':
        return 'absolute top-32 left-1/2 w-0.5 h-24 bg-gray-600 transform -translate-x-1/2 border-l-2 border-dotted border-gray-500';
      case 'sdk':
        return 'absolute top-28 left-1/2 w-0.5 h-20 bg-gray-600 transform -translate-x-1/2 border-l-2 border-dotted border-gray-500';
      case 'left-center':
        return 'absolute top-1/2 left-36 w-28 h-0.5 bg-gray-600 transform -translate-y-1/2 border-t-2 border-dotted border-gray-500';
      case 'center':
        if (to === 'right-center') {
          return 'absolute top-1/2 right-36 w-28 h-0.5 bg-gray-600 transform -translate-y-1/2 border-t-2 border-dotted border-gray-500';
        }
        if (to === 'bottom-center') {
          return 'absolute top-1/2 left-1/2 w-0.5 h-24 bg-gray-600 transform -translate-x-1/2 border-l-2 border-dotted border-gray-500';
        }
        break;
      default:
        return '';
    }
    return '';
  };

  return <div className={getLineClass()} />;
}
