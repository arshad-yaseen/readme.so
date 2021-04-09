import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const onClick = () => {
    props.setFocusedSectionSlug(props.id)
  }

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      onClick={onClick}
      className={`bg-white shadow rounded-md pl-3 pr-6 py-2 flex items-center cursor-pointer focus:outline-none  ${
        props.section.slug === props.focusedSectionSlug
          ? 'bg-gradient-to-r from-emerald-300 via-emerald-200 to-emerald-300'
          : ''
      }`}
    >
      <img className="h-5 w-5 mr-2" src="drag.svg" {...listeners} />
      <p>{props.section.name}</p>
    </li>
  )
}
