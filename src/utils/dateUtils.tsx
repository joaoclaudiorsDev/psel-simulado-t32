const calculateDaysAgo = (publicationDate: string) => {
    const today = new Date();
    const publication = new Date(
      publicationDate.replace(/(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2}):(\d{2})/, '$3-$2-$1T$4:$5:$6')
    );
  
    const differenceInTime = today - publication;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));
  
    return `${differenceInDays} dias atrás`;
  };
  
  export { calculateDaysAgo };