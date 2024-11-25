import styled from "@emotion/styled";

export const SelectWrapper: ReturnType<typeof styled.div> = styled.div`
  .rs {
    /**
		 * Select Control box
		 * isFocused: SelectBox가 focus 된 상태
		 * isOpen: 메뉴가 오픈된 상태
		 */
    &__control {
      min-height: auto;
      padding: 0.75rem 0.5rem;
      border-radius: 0.5rem;
      &--is-focused,
      &--is-open {
        box-shadow: unset;
        border: 1px solid #cccccc;
      }
      &:hover {
        border: 1px solid #999999;
      }
    }
    /**
		 * 선택된 value container
		 */
    &__value-container {
      padding: 0;
    }
    /**
		 * 맨 오른쪽 arrow carrot down icon
		 * separator: 아이콘과 선택된 value 사이의 선
		 */
    &__indicator {
      display: none;
      &-separator {
        display: none;
      }
    }
    /**
		 * Select 클릭 시 오픈되는 메뉴 안쪽의 option
		 * isFocused: option에 마우스가 올라간 상태
		 * isSelected: 현재 선택된 option
		 */
    &__option {
      &--is-focused {
        background-color: #d9d9d9;
      }
      &--is-selected {
        background-color: #a9a9a9;
      }
      &:active {
        background-color: #bbbbbb;
      }
    }
  }
`;
