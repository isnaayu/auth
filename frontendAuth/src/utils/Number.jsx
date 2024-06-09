export const formatPrice = (value) => {
  // Menghilangkan karakter selain digit (misalnya, koma)
  const numericValue = value.replace(/[^0-9]/g, '');

  // Menggunakan fungsi Number untuk mengkonversi nilai menjadi tipe angka
  const numberValue = parseInt(numericValue);

  // Menggunakan fungsi toLocaleString untuk menambahkan koma sebagai pemisah ribuan
  const formattedValue = numberValue.toLocaleString('id-ID');

  return formattedValue;
};

export const unformatPrice = (formattedValue) => {
  // Menghapus semua karakter titik (.)
  const unformattedValue = formattedValue.replace(/\./g, '');

  // Mengembalikan nilai sebagai tipe angka
  return Number(unformattedValue);
};


export function formatIDRCurrency(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
}
