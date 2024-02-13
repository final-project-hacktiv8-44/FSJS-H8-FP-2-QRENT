export const formatToRupiah = (price: number): string => {
    const rupiah = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    });
    return rupiah.format(price);
  };  