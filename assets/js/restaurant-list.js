document.addEventListener("DOMContentLoaded", () => {
    const district = document.getElementById("District");
    const category = document.getElementById("Category");
    const contentBoxes = document.querySelectorAll(".content-box");
    const itemFilters = document.querySelectorAll(".item-filter");
    const customCheckboxes = document.querySelectorAll(".custom-checkbox input[type='checkbox']");
    const deleteTags = document.querySelectorAll(".delete-tag");

    // Hàm ẩn tất cả các dropdown
    function hideAllDropdowns() {
        contentBoxes.forEach(box => box.classList.remove("show"));
        itemFilters.forEach(filter => filter.classList.remove("show"));
    }

    // Hàm hiển thị/ẩn dropdown dựa trên chỉ mục (index)
    function toggleDropdown(index) {
        hideAllDropdowns();
        contentBoxes[index].classList.toggle("show");
        itemFilters[index].classList.toggle("show");
    }

    // Gắn sự kiện click cho nút "District" để hiển thị/ẩn dropdown tương ứng
    district.addEventListener("click", (event) => {
        event.stopPropagation(); 
        toggleDropdown(0); 
    });

    // Gắn sự kiện click cho nút "Category" để hiển thị/ẩn dropdown tương ứng
    category.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleDropdown(1); 
    });

    // Gắn sự kiện click cho toàn bộ document để ẩn tất cả các dropdown khi click bên ngoài
    document.addEventListener("click", hideAllDropdowns);

    // Ngăn chặn sự kiện click lan ra từ các dropdown và các checkbox
    contentBoxes.forEach(box => box.addEventListener("click", event => event.stopPropagation()));
    itemFilters.forEach(filter => filter.addEventListener("click", event => event.stopPropagation()));
    customCheckboxes.forEach(checkbox => checkbox.addEventListener("click", event => event.stopPropagation()));

    // Gắn sự kiện click cho các checkbox để cập nhật số lượng các mục được chọn
    customCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("click", updateUnderItems);
    });

    // Gắn sự kiện click cho các nút "X" (deleteTag) ẩn under-item
    deleteTags.forEach(deleteTag => {
        deleteTag.addEventListener("click", function() {
            const underItem = this.closest(".under-item");
            underItem.classList.remove("show"); // Chỉ ẩn underItem
        });
    });

    // Hàm cập nhật số lượng các mục được chọn và hiển thị/ẩn các underItem
    function updateUnderItems() {
        // Lấy phần tử đầu tiên và cuối cùng có lớp 'under-item'
        const districtUnderItem = document.querySelector(".under-item:first-child");
        const categoryUnderItem = document.querySelector(".under-item:last-child");
        
        // Đếm số lượng checkbox được chọn trong các bộ lọc
        const districtCheckedCount = itemFilters[0].querySelectorAll(".custom-checkbox input[type='checkbox']:checked").length;
        const categoryCheckedCount = itemFilters[1].querySelectorAll(".custom-checkbox input[type='checkbox']:checked").length;
        
        // Ghi log thông tin về số lượng checkbox được chọn
        console.log(`District checked count: ${districtCheckedCount}`);
        console.log(`Category checked count: ${categoryCheckedCount}`);
        
        // Hiển thị hoặc ẩn phần tử dựa trên số lượng checkbox được chọn
        districtUnderItem.classList.toggle("show", districtCheckedCount > 0);
        console.log(`District under item 'show' class toggled: ${districtCheckedCount > 0}`);
        
        districtUnderItem.querySelector(".count").textContent = `(${districtCheckedCount})`;
        console.log(`District under item count text updated: (${districtCheckedCount})`);
        
        categoryUnderItem.classList.toggle("show", categoryCheckedCount > 0);
        console.log(`Category under item 'show' class toggled: ${categoryCheckedCount > 0}`);
        
        categoryUnderItem.querySelector(".count").textContent = `(${categoryCheckedCount})`;
        console.log(`Category under item count text updated: (${categoryCheckedCount})`);
    }
    // Gọi hàm cập nhật ban đầu khi trang được tải
    updateUnderItems(); 
});




document.addEventListener('DOMContentLoaded', function() {
    const paginationItems = document.querySelectorAll('.pagination li');

    paginationItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            if (index === 0 || index === paginationItems.length - 1) {
                return;
            }
            
            paginationItems.forEach(p => p.classList.remove('active'));
            item.classList.add('active');
        });
    });
});











