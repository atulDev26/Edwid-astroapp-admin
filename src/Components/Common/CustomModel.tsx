import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from "@headlessui/react";
import React, { Fragment, cloneElement, type ReactNode, type ReactElement } from "react";
import { IconX } from "@tabler/icons-react";
import { cn } from "../../Utils/cn";
import Button from "./Button";

interface CustomModelProps {
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  showCloseButton?: boolean;
  primaryButton?: string | null;
  secondaryButton?: string | null;
  onPrimaryClick?: (() => void) | null;
  onSecondaryClick?: (() => void) | null;
  triggerButton?: ReactElement<{ onClick?: React.MouseEventHandler }> | null;
  isLoading?: boolean;
  drawer?: boolean;
}

const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
};

const CustomModel: React.FC<CustomModelProps> = ({
  isOpen,
  onOpen,
  onClose,
  title,
  children,
  size = "md",
  showCloseButton = true,
  primaryButton = null,
  secondaryButton = null,
  onPrimaryClick = null,
  onSecondaryClick = null,
  triggerButton = null,
  isLoading = false,
  drawer = false,
}) => {
  const renderTriggerButton = () => {
    if (!triggerButton) return null;
    return cloneElement(triggerButton as ReactElement<{ onClick?: React.MouseEventHandler }>, {
      onClick: (e: React.MouseEvent) => {
        if (onOpen) onOpen();
        const triggerProps = (triggerButton as ReactElement<{ onClick?: React.MouseEventHandler }>).props;
        if (triggerProps.onClick) {
          triggerProps.onClick(e);
        }
      },
    });
  };

  return (
    <>
      {renderTriggerButton()}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 " onClose={onClose}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div
              className={`flex min-h-full overflow-x-hidden ${drawer ? "justify-end" : "items-center justify-center"
                } p-4 text-center`}
            >
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom={
                  drawer ? "translate-x-full opacity-0" : "opacity-0 scale-95"
                }
                enterTo={
                  drawer ? "translate-x-0 opacity-100" : "opacity-100 scale-100"
                }
                leave="ease-in duration-200"
                leaveFrom={
                  drawer ? "translate-x-0 opacity-100" : "opacity-100 scale-100"
                }
                leaveTo={
                  drawer ? "translate-x-full opacity-0" : "opacity-0 scale-95"
                }
              >
                <DialogPanel
                  className={cn(
                    "w-full transform overflow-hidden bg-white text-left align-middle shadow-2xl transition-all",
                    drawer
                      ? "h-full max-w-2xl rounded-l-2xl p-6"
                      : `${sizeClasses[size]} min-w-[300px] sm:min-w-[400px] rounded-[28px] p-8`
                  )}
                >
                  {(title || showCloseButton) && (
                    <div className="flex items-center justify-between mb-4">
                      {title && (
                        <DialogTitle
                          as="h3"
                          className="text-2xl font-bold leading-6 text-on-surface"
                        >
                          {title}
                        </DialogTitle>
                      )}
                      {showCloseButton && (
                        <Button
                          type="button"
                          onClick={onClose}
                          variant="ghost"
                          size="icon"
                          icon={IconX}
                          className="text-outline hover:text-on-surface rounded-xl p-2 hover:bg-surface-container-low"
                          aria-label="Close modal"
                        />
                      )}
                    </div>
                  )}

                  <div className="mt-4 text-on-surface-variant font-medium text-sm sm:text-base leading-relaxed">
                    {children}
                  </div>

                  {(primaryButton || secondaryButton) && (
                    <div className="mt-6 flex items-center justify-end gap-3">
                      {secondaryButton && (
                        <Button
                          type="button"
                          variant="outlined"
                          className="rounded-xl font-bold border-outline-variant text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-6"
                          onClick={() => {
                            if (onSecondaryClick) onSecondaryClick();
                            else onClose();
                          }}
                        >
                          {secondaryButton}
                        </Button>
                      )}
                      {primaryButton && (
                        <Button
                          type="button"
                          variant="primary"
                          isLoading={isLoading}
                          className="rounded-xl font-bold shadow-lg shadow-primary/20 min-w-[120px] px-8"
                          onClick={() => {
                            if (onPrimaryClick) onPrimaryClick();
                          }}
                        >
                          {primaryButton}
                        </Button>
                      )}
                    </div>
                  )}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CustomModel;
