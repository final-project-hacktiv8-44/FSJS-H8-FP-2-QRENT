'use client'
import { isLogout } from "@/actions/logoutAction";
import Swal from 'sweetalert2';

export default function Logout() {
  const handleLogout = () => {
    // Tampilkan SweetAlert konfirmasi sebelum logout
    Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout'
    }).then((result) => {
      if (result.isConfirmed) {
        // Panggil fungsi logout setelah konfirmasi
        isLogout();
      }
    });
  };

  return (
    <div className="font-bold">
      {/* Panggil handleLogout saat tombol diklik */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
